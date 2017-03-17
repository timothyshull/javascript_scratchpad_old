define(["app",
        "tpl!apps/contacts/list/templates/layout.tpl",
        "tpl!apps/contacts/list/templates/panel.tpl",
        "tpl!apps/contacts/list/templates/none.tpl",
        "tpl!apps/contacts/list/templates/list.tpl",
        "tpl!apps/contacts/list/templates/list_item.tpl"],
       function(ContactManager, layoutTpl, panelTpl, noneTpl, listTpl, listItemTpl){
  ContactManager.module("ContactsApp.List.View", function(View, ContactManager, Backbone, Marionette, $, _){
    View.Layout = Marionette.LayoutView.extend({
      template: layoutTpl,

      regions: {
        panelRegion: "#panel-region",
        contactsRegion: "#contacts-region"
      }
    });

    View.Panel = Marionette.ItemView.extend({
      template: panelTpl,

      triggers: {
        "click button.js-new": "contact:new"
      },

      events: {
        "submit #filter-form": "filterContacts"
      },

      ui: {
        criterion: "input.js-filter-criterion"
      },

      filterContacts: function(e){
        e.preventDefault();
        var criterion = this.$(".js-filter-criterion").val();
        this.trigger("contacts:filter", criterion);
      },

      onSetFilterCriterion: function(criterion){
        this.ui.criterion.val(criterion);
      }
    });

    View.Contact = Marionette.ItemView.extend({
      tagName: "tr",
      template: listItemTpl,

      triggers: {
        "click td a.js-show": "contact:show",
        "click td a.js-edit": "contact:edit",
        "click button.js-delete": "contact:delete"
      },

      events: {
        "click": "highlightName"
      },

      flash: function(cssClass){
        var $view = this.$el;
        $view.hide().toggleClass(cssClass).fadeIn(800, function(){
          setTimeout(function(){
            $view.toggleClass(cssClass)
          }, 500);
        });
      },

      highlightName: function(e){
        this.$el.toggleClass("warning");
      },

      remove: function(){
        var self = this;
        this.$el.fadeOut(function(){
          Marionette.ItemView.prototype.remove.call(self);
        });
      }
    });

    var NoContactsView = Marionette.ItemView.extend({
      template: noneTpl,
      tagName: "tr",
      className: "alert"
    });

    View.Contacts = Marionette.CompositeView.extend({
      tagName: "table",
      className: "table table-hover",
      template: listTpl,
      emptyView: NoContactsView,
      childView: View.Contact,
      childViewContainer: "tbody",

      initialize: function(){
        this.listenTo(this.collection, "reset", function(){
          this.attachHtml = function(collectionView, childView, index){
            collectionView.$el.append(childView.el);
          }
        });
      },

      onRenderCollection: function(){
        this.attachHtml = function(collectionView, childView, index){
          collectionView.$el.prepend(childView.el);
        }
      }
    });
  });

  return ContactManager.ContactsApp.List.View;
});
