import { useState } from 'react';
import { IonPage, IonContent, IonInput, IonButton, IonItem, IonLabel } from '@ionic/react';
import { useAuth } from '../contexts/AuthContexts';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useAuth();

  const handleSignup = async () => {
    try {
      await signup(email, password);
    } catch (error) {
      console.error("Failed to sign up:", error);
    }
  };

  return (
    <IonPage>
      <IonContent>
        <IonItem>
          <IonLabel>Email</IonLabel>
          <IonInput onIonChange={(e) => setEmail(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel>Password</IonLabel>
          <IonInput type="password" onIonChange={(e) => setPassword(e.detail.value!)} />
        </IonItem>
        <IonButton onClick={handleSignup}>Sign Up</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Signup;