import './Navbar.css'

function Navbar()
{
    return(
        <div className="navbar">
            <div className='navbar_div' id='NS'>NS</div>
            <div className='navbar_div'>Home</div>
            <div className='navbar_div'>About</div>
            <div className='navbar_div'>Project</div>
            <div className='navbar_div'>Contact</div>
             <div className='navbar_div'>
                <div className='icon_div'>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-twitter"></i>

                </div>
             </div>
        </div>
    )
}

export default Navbar