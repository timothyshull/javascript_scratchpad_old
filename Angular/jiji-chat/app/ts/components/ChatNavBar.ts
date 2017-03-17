import {Component, OnInit} from 'angular2/core';
import {MessagesService, ThreadsService} from '../services/services';
import {Message, Thread} from '../models';
import * as _ from 'underscore';

// <nav class="navbar navbar-default">
// <div class="container-fluid">
// <div class="navbar-header">
// <a class="navbar-brand" href="https://ng-book.com/2">
// <img src="${require('images/logos/ng-book-2-minibook.png')}"/>
//     ng-book 2
// </a>
// </div>
// <p class="navbar-text navbar-right">
// <button class="btn btn-primary" type="button">
//     Messages <span class="badge">{{unreadMessagesCount}}</span>
// </button>
// </p>
// </div>
// </nav>

@Component({
    selector: 'nav-bar',
    template: `
<div id="sidebar-wrapper">
    <ul class="sidebar-nav">
        <li class="sidebar-brand">
            <a href="#">
                RINKLED
            </a>
        </li>
        <li>
            <a href="#">Dashboard</a>
            <ul class="sidebar-submenu">
                <li> 
                    <a href="#">
                        felixc
                    </a>
                </li>
                <li>
                    <a href="#">bookmarks</a>
                </li>
                <li>
                    <a href="#">files</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">Your private teams</a>
            <ul class="sidebar-submenu">
                <li> 
                    <a href="#">IOS developers</a>
                </li>
                <li>
                    <a href="#">developers</a>
                </li>
                <li>
                    <a href="#">general</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">People</a>
            <ul class="sidebar-submenu">
                <li> 
                    <a href="#">andrew g</a>
                </li>
                <li>
                    <a href="#">austin m</a>
                </li>
                <li>
                    <a href="#">donald s</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">Public teams</a>
        </li>
    </ul>
</div>
`
    // template: `
    // <nav class="navbar navbar-default">
    //   <div class="container-fluid">
    //     <div class="navbar-header">
    //       <a class="navbar-brand" href="https://www.example.com/">
    //          Fill in link
    //       </a>
    //     </div>
    //     <p class="navbar-text navbar-right">
    //       <button class="btn btn-primary" type="button">
    //         Messages <span class="badge">{{unreadMessagesCount}}</span>
    //       </button>
    //     </p>
    //   </div>
    // </nav>
    // `
})
export class ChatNavBar implements OnInit {
    unreadMessagesCount: number;

    constructor(public messagesService: MessagesService,
                public threadsService: ThreadsService) {
    }

    ngOnInit(): void {
        this.messagesService.messages
            .combineLatest(
                this.threadsService.currentThread,
                (messages: Message[], currentThread: Thread) =>
                    [currentThread, messages])

            .subscribe(([currentThread, messages]: [Thread, Message[]]) => {
                this.unreadMessagesCount =
                    _.reduce(
                        messages,
                        (sum: number, m: Message) => {
                            let messageIsInCurrentThread: boolean = m.thread &&
                                currentThread &&
                                (currentThread.id === m.thread.id);
                            if (m && !m.isRead && !messageIsInCurrentThread) {
                                sum = sum + 1;
                            }
                            return sum;
                        },
                        0);
            });
    }
}
