<?php


ignore_user_abort(true);
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
if(isset($_GET['cancel_download']) && !empty($_GET['cancel_download']))
{
    session_start();
    $_SESSION['cancel_current_download'] = 1;    
    session_commit();
    
}
else if(isset($_GET['track_download']) && !empty($_GET['track_download']))
{   
    session_start();    
    if(isset($_SESSION['down_status']))
    {
        $arrJson = array();
        $arrJson['down_status'] = $_SESSION['down_status'];
        $arrJson['current_file_size'] = $_SESSION['current_file_size'];
        $arrJson['current_file_downloaded_bytes'] = $_SESSION['current_file_downloaded_bytes'];


        
        echo json_encode($arrJson);
        
        //downloaded status was aborted . once it sends set it to undefined
        if(isset($_SESSION['down_status']) && !empty($_SESSION['down_status']))
        {
            if($_SESSION['down_status'] == 'aborted')
            {
                $arrJson['down_status'] = $_SESSION['undefined'];
            }
        }
    }
    session_commit();
    
    die();
}
else if(isset($_GET['download_id']) && !empty($_GET['download_id']))
{

    
    //set the download file path or binary stream from the database here.
    //find it using given download_id 

    $file = @fopen("SET YOUR DOWNLOADING FILE PATH HERE","rb");
    $fileSize = filesize("SET YOUR DOWNLOADING FILE PATH HERE");
    $fileName = "SET FILE NAME";
    
    
    //
    
    header('Content-Type: application/csv');
    header("Content-Disposition: attachment; filename=".$fileName);
    header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
    header('Content-Length: '.$fileSize);

    set_time_limit(0);
    
   

    
    
    session_start();
    $_SESSION['down_status'] = 'downloading';
    $_SESSION['cancel_current_download'] = 0;
    
    clearstatcache();
    $_SESSION['current_file_size'] = $fileSize;
    session_commit();
    
    $downloadedBytes = 0;
    while(!feof($file))
    {
            //sleep(1);

            

            echo fread($file, 1024*8);
            ob_flush();
            flush();     
            $downloadedBytes+= (1024 * 8);

            
            session_start();
            $_SESSION['current_file_downloaded_bytes'] = $downloadedBytes;
            
            if(isset($_SESSION['cancel_current_download']) && $_SESSION['cancel_current_download'] == 1)
            {
                $_SESSION['down_status'] = 'aborted';
                exit();
            
            }else if(connection_aborted() && !feof($file))
            {
                $_SESSION['down_status'] = 'aborted';
                exit();
            }
            
            if(feof($file))
            {
                    $_SESSION['down_status'] = 'downloaded';
            }
            
            
            session_commit();
    }
    
    session_start();
    $_SESSION['down_status'] = 'downloaded';

    session_commit();
    
    
    

    
}
