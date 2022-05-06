import React, { Component } from 'react';

class Ability extends Component {
    render() {
        return (
            <section id="myability">
                <div className="contanier">
                    <div className="mainab col-4">
                        <img className="abimg" src="img/abilityimg.jpg" alt="스킬이미지"></img>
                    </div>
                    <div className="suvab col-8">
                        <h3><strong>새로운 도전을 무서워하지 않는</strong></h3>
                    </div>
                    {/* <div class="diagram">
                        <div class="abilityCircle graphic">
                            <svg class="moving-outline  dash50" viewBox="0 0 453 453" fill="none" 
                            xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50%" cy="50%" r="200" stroke="#018EBA" stroke-width="10" />
                            </svg>
                        </div>
                        <div class="abilityCircle htmlCss">
                            <svg class="moving-outline  dash80" viewBox="0 0 453 453" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50%" cy="50%" r="200" stroke="#c4d34d" stroke-width="10" />
                            </svg>
                        </div>
                        <div class="abilityCircle Plan">
                            <svg class="moving-outline dash75" viewBox="0 0 453 453" fill="none" 
                            xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50%" cy="50%" r="200" stroke="#018EBA" stroke-width="10" />
                            </svg>
                        </div>
                    </div> */}
                </div>
            </section>
        );
    }
}

export default Ability;