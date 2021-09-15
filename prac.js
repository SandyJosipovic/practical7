var prac1 = new Vue({
  el: '#prac-1',
  data: {
    todos: [{
        text: 'Finish all practicls'
      },
      {
        text: 'Submit to GitHub'
      },
      {
        text: 'Submit to Deakin'
      }
    ]
  }
})

new Vue({
  el: '#render',
  data: {
    message: 'Hello! Welcome. This is my declarative rednering'
  }
})

var show =new Vue({
	el:'#v-show',
	data:{
	a:true
},
	methods:{
		toggle(){
	this.a = !this.a
}
 }				 
})

var payment = new Vue({
  el: '#payment',
  data: {
    items: [
      { message: 'cash' },
      { message: 'card' }
    ]
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var prac5 = new Vue({
  el: '#prac5',
  data: {
    Books: [
      { id: 0, text: 'Hunger Games' },
      { id: 1, text: 'Monogatari' },
      { id: 2, text: 'I am number 4' },
      { id: 3, text: 'Maze Runner' },
      { id: 4, text: 'Konosuba' }
        
    ]
  }
})

new Vue({
  el: '#check',
  data: {
  	car: []
  }
})

var temp = "myValue";

// Create New Option.
var newOption = $('<option>');
newOption.attr('value', temp).text(temp);

// Append that to the DropDownList.
$('#dptcentres_edit').append(newOption);

// Select the Option.
$("#dptcentres_edit > [value=" + temp + "]").attr("selected", "true");