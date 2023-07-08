
function add(){
                
                let inputs=document.getElementById("input_text");
                let text=document.querySelector(".output_list");
                let newEl=document.createElement("ul");
                newEl.innerHTML=inputs.value;
                text.appendChild(newEl);
                inputs.value="";
        }