
FilterProps{
    setCats:(data:Cat[] => void),
}
export default function Filter<FilterProps>(){

return(
    <div>
    <input type="text" placeholder="Type your word to find cats"/>
    <button type="submit">Pesquisar</button>
    </div>
)


}