// props.children can be used to pass a component's children elements directly to its output

function FancyBorder(props){
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function WelcomeDialog(){
    return(
        <FancyBorder color="blue">
            <h1 class='Dialog-title'>
                Welcome
            </h1>
            <p className='Dialog-message'>
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    )
}

export default WelcomeDialog