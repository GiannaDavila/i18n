import { useContext } from "react"
import { languageContext } from "../App"

export default function Details(){
    const { lang } = useContext(languageContext)
    return (
        <div>
            <section>{lang["details.header"]}</section>
            <h3>{lang["details.text"]}</h3>
            <p></p>
        </div>
    )
}