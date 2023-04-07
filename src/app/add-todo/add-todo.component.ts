import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  todo!: string;
  localItem: any;
  title!: string

  @ViewChild('newItem')
  newItem!: ElementRef;
  constructor() {
    this.localItem = localStorage.getItem("todos");
    if (this.localItem == null) {
      this.allItems = [];
    } else {
      console.log(this.allItems)
      this.allItems = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
  }


  data: 'all' | 'active' | 'done' = 'all';

  allItems = [{ title: "raunak", active: false }];

  get todos() {
    if (this.data === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(todo => this.data === 'active');
  }
  addtodo(title: any) {
    if (title !== "") {
      this.allItems.push({
        title,
        active: true

      })
      console.log(title);
      this.newItem.nativeElement.value = '';
    } else {
      alert("please enter the title!")
    }

    localStorage.setItem("todos", JSON.stringify(this.allItems));
    // let datato = JSON.parse(localStorage.getItem("todos") || '{}');
    // console.log(datato);

  }

  remove(todo: any) {
    this.allItems.splice(this.allItems.indexOf(todo), 1);
    localStorage.setItem("todos", JSON.stringify(this.allItems));
    // let datato = JSON.parse(localStorage.getItem("todos") || '{}');
    // console.log(datato);
  }

}
