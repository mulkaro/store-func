import React from 'react';
import PropTypes from 'prop-types'; 
import GoodModel from '../models/GoodModel';

function GoodProfile(props) {
    const { good } = props;
    return(
        <div>
            <div class="main-content">
                <h2>{ good.brand }</h2>
                <h1>{ good.title }</h1>
                <h3>{ good.description }</h3>
                <div class="description">{ good.descriptionFull }</div>
                <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
                <div class="divider"></div>
                <div class="purchase-info"></div>
                <div class="price">{ good.currency }{ good.price }</div>
                <button>Добавить в корзину</button>
            </div>
        </div>
    );
}

GoodProfile.propTypes = {
    good: PropTypes.instanceOf(GoodModel).isRequired
}

export default GoodProfile;
