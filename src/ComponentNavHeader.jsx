import './ComponentNavHeader.css'
import logo from './images/logo.png'

const imageroute = './images/logo.png'

function ComponentNavHeader() {
    return (        
        <div class="ComponentNavHeader">            
            
            <div class="container-fluid">
                <div id='row' class="row justify-content-center align-items-center">
                    <div class="col-1">
                        <img src={logo} alt="logo" />
                    </div>
                    <div class="col-10">
                        <h1 id="title">CJava</h1>
                    </div>
                    <div class="col-1 d-flex justify-content-start">
                        <button type="button" class="btn btn-primary" onClick={mensaje}>Sobre el desarrollador</button>
                    </div>
                </div>
            </div>
            
        </div >
    );
}

function mensaje(){
    alert("sigo trabajando en ello :(")
}

export default ComponentNavHeader;