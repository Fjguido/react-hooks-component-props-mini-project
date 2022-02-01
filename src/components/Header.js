//when creeating a new component start off with a function 
//you put the name in curly brackets so it can be dynamic
function Header({name}) {
    return (
        //need to put header and not just h1 so it can be known as a header 
        <header>
            <h1>{name}</h1>
        </header>
    )
}
//always export default when creating a new component
export default Header;
