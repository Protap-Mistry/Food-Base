const menubar = document.querySelector('#menubar');
const menuItems = document.querySelector('#menuItems');

menubar.addEventListener('click', () =>{
    if(menuItems.classList.contains('hidden')) //hidden is the className
    {
        menuItems.classList.remove('hidden');
    }
    else
    {
        menuItems.classList.add('hidden');
    }
})