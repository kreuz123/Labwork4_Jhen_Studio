import { useState } from 'react';
import { IonPage, IonContent, IonInput, IonButton, IonItem, IonLabel } from '@ionic/react';
import { useAuth } from '../contexts/AuthContexts';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (error) {
      console.error("Failed to log in:", error);
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
        <IonButton onClick={handleLogin}>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
