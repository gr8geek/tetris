import React, {Component} from 'react';
 
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }
    componentDidMount(){
        console.log("ComponentDidMount invoked!!!");
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    renderComments(dish) {
        
        if (dish != null){
            const comm= dish.comments.map((comm1)=>{return(
                <div key={comm1.id}>
                    <p>{comm1.comment}</p>
                    <p>{"--"+comm1.author+" ,"+comm1.date}</p>
                </div>
            );});
            return(
                <div>
                    <div>
                      <div><h4>Comments</h4></div>
                      <div>{comm}</div>
                    </div>
                </div>
            );}
        else
            return(
                <div></div>
            );
    }


    render() {
         const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
              
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderComments(this.state.selectedDish)}
                  </div>
                </div>
                
            </div>
        );
    }
}

export default DishDetail;