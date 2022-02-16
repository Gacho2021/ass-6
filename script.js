document.addEventListener('DOMContentloaded'), function(){

    const list =document.querySelector("movie-list");
    const forms = document.forms
    
    //delete movie
    list.addEventListener('click',(e)=>{
    if(e.target.calssName=='delete'){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
    });
    
    //add movie
    const addform = forms['add-movie'];
    addform.addEventListener('submit',function(e){
        e.preventDefault();
    
        //creating elemrnts
        const value=addform.querySelector('input[type="text"]').value;
        const li = document.createElement('li');
        const movieName = document.createElement('span');
        const deleteBtn = document.createElement('span');
    
        //add text content
        movieName.textContent = value;
        deleteBtn.textContent = 'delete';
    
        //add classes
        movieName.classList.add('name');
        deleteBtn.classList.add('delete');
    
        //append to DOM
        li.appendChild(movieName);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    
    });
    
    }
