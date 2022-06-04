import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Сoursework</span>
                <span className="headerTitleLg">Website - blog</span>
            </div>
            <img
                className="headerImg"
                src="https://i.pinimg.com/originals/f5/4a/94/f54a9427d6e28ac6ff786295b55c5e46.jpg"
                alt="" />
        </div>
    )
}