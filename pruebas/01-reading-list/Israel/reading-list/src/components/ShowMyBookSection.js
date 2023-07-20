

function ShowMyBookSection({ books }) {
    
    const sectionMyBooks = document.getElementById("mybooks-section");
   
    if (sectionMyBooks && books.length === 0) {
        sectionMyBooks.style.display = "none";
        
    }else if(sectionMyBooks){
        sectionMyBooks.style.display="flex";
    }
   

    return null
    
}

export default ShowMyBookSection