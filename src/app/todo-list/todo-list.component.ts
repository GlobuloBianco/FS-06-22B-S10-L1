import { Component, OnInit } from '@angular/core';

var array: object[] = [];


function printData() {
    let url:string = 'http://localhost:3000/lista';
    let HTML = document.getElementById('lista') as HTMLElement;

	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			array = data;
            console.log(array);
			if (array.length > 0) {
				array.map(function (element: any) {
					HTML.innerHTML += `<li>Id: ${element.id}, title: ${element.title}, Completed: ${element.completed}.</li>`;
				});
			}
            // --------------------------------------//
            HTML.innerHTML += "<p style='font-weight: bold;'>Dopo modifica completed:</p>";
            // --------------------------------------//
			if (array.length > 0) {
				array.map(function (element: any) {
                    if(element.completed == false) {
                        element.completed = true;
                    }
					HTML.innerHTML += `<li>Id: ${element.id}, title: ${element.title}, Completed: ${element.completed}.</li>`;
				});
			}
		});
}

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        printData();
    }

}



