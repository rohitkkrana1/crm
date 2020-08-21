import React from 'react'

export default function Card() {
    return (
        <div className="panel panel-default card-view">
        <div className="panel-wrapper collapse in">
            <div className="panel-body sm-data-box-1">
                <span className="uppercase-font weight-500 font-14 block text-center txt-dark">customer satisfaction</span>	
                <div className="cus-sat-stat weight-500 txt-success text-center mt-5">
                    <span className="counter-anim">93.13</span><span>%</span>
                </div>
                <div className="progress-anim mt-20">
                    <div className="progress">
                        <div className="progress-bar progress-bar-success wow animated progress-animated" role="progressbar" aria-valuenow="93.12" aria-valuemin="0" aria-valuemax="100" style="width: 93.12%;"></div>
                    </div>
                </div>
                <ul className="flex-stat mt-5">
                    <li>
                        <span className="block">Previous</span>
                        <span className="block txt-dark weight-500 font-15">79.82</span>
                    </li>
                    <li>
                        <span className="block">% Change</span>
                        <span className="block txt-dark weight-500 font-15">+14.29</span>
                    </li>
                    <li>
                        <span className="block">Trend</span>
                        <span className="block">
                            <i className="zmdi zmdi-trending-up txt-success font-20"></i>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}
