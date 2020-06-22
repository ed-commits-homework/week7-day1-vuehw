import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            greeting: "Hello!",
            items: [
                { name: "get started", priority: "high" },
                { name: "finish everything!", priority: "normal" }
            ],
            newItem: "",
            priority: "normal",
        },
        methods: {
            new_todo: function () {
                console.log("new todo")
                this.items.unshift({
                    name: this.newItem,
                    priority: this.priority
                });
                this.newItem = "";
                this.priority = "normal";
            }
        }
    });
});
