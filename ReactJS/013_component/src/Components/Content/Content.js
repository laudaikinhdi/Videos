import React, { Component } from 'react';

function mapStateToProps(state) {
    return {

    };
}

export default class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            trangThai: 0
        }
        
    }
    renderButton = () => {
        return (
            <div className="btn btn-group">
                <div className="btn btn-info" onClick={this.editClick}>Edit</div>
                <div className="btn btn-danger" onClick={()=>this.thongbao2("ThanhTan")}>Remove</div>       
            </div>
        )
    }
    renderForm = () => (
        <div className="row">
            <input ref={(dulieunhap)=>{this.trunggian = dulieunhap}} defaultValue={this.props.tieude} type="text" name="ten" className="form-control" />
            <div className="btn btn-default" onClick={this.saveClick}>Save</div>
        </div>
    )
    displayCheck = () => {
        if(this.state.trangThai === 0){
            return this.renderButton();
        }else{
            return this.renderForm();
        }
    }
    editClick = () => {
        this.setState({
            trangThai: 1
        });
    }
    saveClick = () => {
        this.setState({
            trangThai: 0
        });
        console.log(this.trunggian.value);
    }
    // thongbao(){
    //     alert('Xử lý onClick reactjs');
    // }
    thongbao = ()=>{
        alert('Xử lý onClick reactjs');
    }
    thongbao2 = (value) => {
        alert('Xử lý onClick reactjs thongbao2' + value);
    }
    render() {
        return (
            <section>
            <div className="container">
                <div className="row align-items-center">
                <div className={"col-lg-6 " + this.props.vitri1}>
                    <div className="p-5">
                    <img className="img-fluid rounded-circle" src="img/01.jpg" alt />
                    </div>
                </div>
                <div className={"col-lg-6 " + this.props.vitri2}>
                    <div className="p-5">
                    <h2 className="display-4">{this.props.tieude}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                    </div>
                </div>
                
                </div>
            </div>
            {this.displayCheck()}
            </section>
        );
    }
}