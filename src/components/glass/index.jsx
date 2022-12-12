const Glass = () => {
    return (
        <div className="glass-wrapper">
            <div className="glass">
                <div className="glass__inner" id="glass-inner">
                    <div
                        className="ingredient animated animated-2"
                        style="height: calc(100% / 3); background-color: brown"
                    >
                        <p className="ingredient__description">1 part of gin</p>
                    </div>
                </div>
            </div>
            <div className="glass__base"></div>
        </div>
    )
}

export default Glass;