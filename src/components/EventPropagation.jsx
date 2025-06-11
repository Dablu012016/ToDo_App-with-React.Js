import '../components/Event.css';

export const EventPropagation = () => {
    const handleGrandParent = () => {
        console.log("GrandParent, clicked");
    };

    const handleParentClick = () => {
        console.log("parent clicked");
    };

    const handleChildClick = (event) => {

        // console.log(event);  
        console.log("chiled clicked"); 
        
        event.stopPropagation();
    };

    return (
        <>
            <section className="main_div">
                <div className="g_div" onClickCapture={handleGrandParent}>
                    <div className="p_div" onClickCapture={handleParentClick}>
                        <button className="c_div" onClickCapture={handleChildClick}>Child div</button>
                    </div>
                </div>
            </section>
        </>
    );
}