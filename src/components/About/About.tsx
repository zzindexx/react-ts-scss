import * as React from 'react';
import { LeftNav } from '../LeftNav/LeftNav';
import { Switch, Route } from 'react-router-dom';

export const About: React.SFC = () => {
    return <React.Fragment>
        <div className="container-fluid">
            <div className="row flex-xl-nowrap">
                <LeftNav />
                <main role="main" className="col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content">
                    <Switch>
                        <Route path="/about" exact>
                            <h1>Page 1</h1>
                            <p className="lead mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat quis justo a tincidunt. Duis aliquam, nisl nec euismod ultrices, tortor ligula volutpat quam, quis feugiat diam orci ac libero. Quisque est mi, mattis ac turpis ac, varius hendrerit erat. Integer dapibus quis purus pulvinar commodo. Mauris posuere sem eu sapien mattis varius. Sed nec tincidunt arcu. Morbi lacus diam, fringilla a ligula id, auctor fermentum sapien. Nulla lectus augue, sagittis vitae quam quis, commodo ullamcorper neque. Vestibulum convallis elit tellus, non sagittis enim porttitor a. Mauris dapibus turpis sit amet nunc laoreet eleifend. Sed arcu neque, vulputate eget sapien vel, congue porttitor purus. Proin scelerisque augue enim, quis venenatis quam placerat non. Duis velit tortor, gravida ac nibh cursus, suscipit pellentesque leo. Nunc ultrices est lacus, ut consectetur mi vulputate eu.</p>
                        </Route>
                        <Route path="/about/secondpage">
                            <h1>Page 2</h1>
                            <p className="lead mt-4">Suspendisse felis eros, eleifend feugiat mi eget, pharetra interdum mauris. Cras bibendum augue felis, quis viverra arcu iaculis vitae. Ut et imperdiet mi. Suspendisse potenti. Cras arcu mi, condimentum quis tellus ut, hendrerit volutpat elit. Donec auctor purus arcu, ut ultricies nisl dapibus id. Suspendisse potenti. Nam viverra mauris sed leo feugiat eleifend. Vestibulum rhoncus sed leo blandit consectetur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
                        </Route>
                    </Switch>
                </main>
            </div>
        </div>

    </React.Fragment>;
}