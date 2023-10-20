import React from "react";

const Header = () => {
    return (
        <>
            <div className="container">
                <div ClassName="Formulario">
                    <h1>CHOOSE YOUR WEAPON</h1>
                    <form>
                        <input ClassName="PlayerUnoUsarname" type="text" value="" placeholder="Name Player One" />
                        <input ClassName="PlayerDosUsername" type="text" value="" placeholder="Name Player Two" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Header;