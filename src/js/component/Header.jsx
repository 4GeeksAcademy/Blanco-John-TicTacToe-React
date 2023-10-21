import React from "react";

const Header = () => {
    return (
        <>
            <div className="container position-absolute top-50 start-50 translate-middle">
                <div ClassName="Formulario">
                    <h1>CHOOSE YOUR WEAPON</h1>
                    <form>
                        <input ClassName="PlayerUnoUsarname" type="text" value="" placeholder="Name Player One" />
                        <input ClassName="PlayerDosUsername" type="text" value="" placeholder="Name Player Two" />
                    </form>
                    <div className="Weapons">
                        <button type="button" class="btn btn-secondary">Secondary</button>
                        <button type="button" class="btn btn-secondary">Secondary</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header;