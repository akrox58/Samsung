 $(document).ready(function(){
    $("button.A").click(function(){
        $("form.A").toggle(1000);
        console.log($("form.A").find(':input'));

    });
    $("button.K").click(function(){
        console.log($("form.A").find(':input'));

    });

    $("button.B").click(function(){
        $("form.B").toggle(1000);
    });
  });

function Person(name,id){
  this.name=name;
  this.id=id;

}

function showInput(divi) {
        //document.getElementById('results').innerHTML =
          console.log(document.getElementById(divi));
    }
