export const BotonSumar=({incrementaCont, cont})=> {
    console.log('entrando');
    console.log({incrementaCont});
    return (
        <>
    <button onClick={incrementaCont}>          
          count is {cont}
    </button> 
        </>
    )
}