import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { triangle, ellipse, square } from 'ionicons/icons';
import { AuthProvider } from './contexts/AuthContexts';
import Login from './pages/Login';
import Signup from './pages/Signup';
import WhatWeDo from './pages/WhatWeDo';
import Stories from './pages/Stories';
import BookWithUs from './pages/BookWithUs';
import OurTeam from './pages/OurTeam';
import PrivateRoute from "./contexts/PrivateRoute";

const App: React.FC = () => (
  <IonApp>
    <AuthProvider>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={Signup} exact />
          <PrivateRoute path="/what-we-do" component={WhatWeDo} />
          <PrivateRoute path="/stories" component={Stories} />
          <PrivateRoute path="/book-with-us" component={BookWithUs} />
          <PrivateRoute path="/our-team" component={OurTeam} />
          <Redirect exact from="/" to="/login" />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="what-we-do" href="/what-we-do">
            <IonIcon icon={triangle} />
            <IonLabel>What We Do</IonLabel>
          </IonTabButton>
          <IonTabButton tab="stories" href="/stories">
            <IonIcon icon={ellipse} />
            <IonLabel>Stories</IonLabel>
          </IonTabButton>
          <IonTabButton tab="book-with-us" href="/book-with-us">
            <IonIcon icon={square} />
            <IonLabel>Book With Us</IonLabel>
          </IonTabButton>
          <IonTabButton tab="our-team" href="/our-team">
            <IonIcon icon={triangle} />
            <IonLabel>Our Team</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonReactRouter>
    </AuthProvider>
  </IonApp>
);

export default App;