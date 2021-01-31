(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={notification:"Notification_notification__nj8IZ"}},2:function(t,e,n){t.exports={title:"Form_title__zmLGe",form:"Form_form__3ykt5",label:"Form_label__L69a_",input:"Form_input__TcymW",button:"Form_button__81TOL"}},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),o=n.n(c),r=n(10),i=n.n(r),s=(n(20),n(13)),l=n(3),u=n(4),b=n(6),m=n(5),h=n(22),j=n(11),d=n(2),f=n.n(d),p=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t.handleSubmit=function(e){var n=t.state,a=n.name,c=n.number;e.preventDefault(),t.props.onSubmit(a,c),t.reset()},t}return Object(u.a)(n,[{key:"reset",value:function(){this.setState({name:"",number:""})}},{key:"render",value:function(){var t=this.props.addContact,e=this.state,n=e.name,c=e.number;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:f.a.title,children:"Phonebook"}),Object(a.jsxs)("form",{className:f.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:f.a.label,children:["Name",Object(a.jsx)("input",{className:f.a.input,type:"text",name:"name",placeholder:"Enter the name",value:n,onChange:this.handleChange})]}),Object(a.jsxs)("label",{className:f.a.label,children:["Number",Object(a.jsx)("input",{className:f.a.input,type:"number",name:"number",placeholder:"Enter the phone number",value:c,onChange:this.handleChange})]}),Object(a.jsx)("button",{className:f.a.button,onSubmit:t,disabled:!1,children:"Add contact"})]})]})}}]),n}(c.Component),O=n(7),_=n.n(O),v=function(t){var e=t.contacts,n=t.onDelete,c=t.children;return Object(a.jsxs)("div",{children:[Object(a.jsx)("ul",{className:_.a.list,children:e.map((function(t){return Object(a.jsxs)("li",{className:_.a.item,children:["".concat(t.name,": ").concat(t.number),Object(a.jsx)("button",{className:_.a.button,onClick:function(){n(t.id)},children:"Delete"})]},Object(h.a)())}))}),c]})},C=n(9),x=n.n(C),g=function(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{className:x.a.label,children:["Find contacts by name",Object(a.jsx)("input",{className:x.a.input,type:"text",name:"filter",placeholder:"Find contacts by name",value:e,onChange:n})]})},y=(n(12),function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.checkContact=function(e,n){if(t.state.contacts.some((function(t){return t.name===e})))return alert("This contact is already in your contacts");t.addContact(e,n)},t.addContact=function(e,n){var a={id:Object(h.a)(),name:e,number:n};t.setState((function(t){return{contacts:[a].concat(Object(s.a)(t.contacts))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.filterContacts=function(e){t.setState({filter:e.target.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.name,c=t.filter,o=t.number;return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(p,{name:n,number:o,contacts:e,onChange:this.handleChange,onSubmit:this.checkContact}),Object(a.jsx)(g,{value:c,onChange:this.filterContacts}),Object(a.jsx)(v,{contacts:this.getVisibleContacts(),onDelete:this.deleteContact})]})}}]),n}(c.Component));i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={list:"Contacts_list__1nM6c",item:"Contacts_item__248Tg",button:"Contacts_button__1itx2"}},9:function(t,e,n){t.exports={input:"Filter_input__3j8TV"}}},[[21,1,2]]]);
//# sourceMappingURL=main.d2ceaf10.chunk.js.map