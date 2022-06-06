import style from './FormUpdateCart.module.css';
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import RenderSelect from "../Share/RenderSelect";
import RenderNumberAnt from "../Share/RenderNumberAnt"
import {
    HeartFilled,
  } from "@ant-design/icons";

let FormUpdateCart = props => {
    const { handleSubmit, colors } = props

    const toggleClass = (e) => {
        if (props.isLoggedIn === false) {
          props.setShow(true);
          e.preventDefault();
        } else {
          if (!props.isLiked) {
            let element = e.target.parentElement.parentElement;
            element.classList.toggle(`${style.heartIconClicked}`);
            props.addAccessoryToWishlist();
          } else {
            e.preventDefault();
            let element = e.target.parentElement.parentElement;
            element.classList.toggle(`${style.heartIconClicked}`);
            props.handleDeleteWishListItem();
          }
        }
      };

    let options = colors?.map(d => {
        return { label: d, value: d }
    }) || []

    return (
        <form onSubmit={handleSubmit}>
            <div className={`${style.buttomChoice} row`}>
                <div className={`${style.choice}`}>
                    <div className={`${style.choiceColor} col-xl-5`}>
                        <label className={`${style.document}`}>Màu sắc</label>
                        <Field className={`${style.buttonNumber} col-xl-9`}
                            name="color"
                            component={RenderSelect}
                            options={options}
                            placeholder='Màu sắc'
                        />
                    </div>
                    <div className={`${style.choiceNumber} col-xl-5`}>
                        <label className={`${style.document}`}>Số lượng</label>
                        <Field className={`${style.buttonNumber} col-xl-9`}
                            min={1}
                            name="quantity"
                            component={RenderNumberAnt}
                            placeholder='Số lượng'
                        />
                    </div>
                </div>
                <div className={`${style.submit} col-xl-12 text-center ${style.btnWrapper}`}>
                    <button className={`${style.document} btn btn-primary mr-3 `} type="submit"> <FontAwesomeIcon icon={faSave} /> THÊM VÀO GIỎ HÀNG</button>
                    {props.isLiked ? (
                                <HeartFilled
                                  onClick={(e) =>
                                    toggleClass(e)
                                  }
                                  className={`${style.heartIcon} ${style.heartIconClicked}`}
                                />
                              ) : (
                                <HeartFilled
                                  onClick={(e) =>
                                    toggleClass(e)
                                  }
                                  className={`${style.heartIcon}`}
                                />
                              )}
                </div>
            </div>
        </form>
    )
}

FormUpdateCart = reduxForm({
    enableReinitialize: true,
    form: 'FormUpdateCart'
})(FormUpdateCart)

export default FormUpdateCart
