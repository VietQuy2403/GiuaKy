import React, { useState, useEffect } from 'react';
import { 
  IonApp, IonContent, IonHeader, IonTitle, IonToolbar, IonInput, 
  IonButton, IonText, IonImg, IonCard, IonCardContent, IonLabel, IonGrid, IonRow, IonCol 
} from '@ionic/react';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Share } from '@capacitor/share';
import { Camera, CameraResultType } from '@capacitor/camera';

const App: React.FC = () => {
  const [height, setHeight] = useState<string | null>('');
  const [weight, setWeight] = useState<string | null>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [status, setStatus] = useState('');
  const [photo, setPhoto] = useState<string | null>(null);

  useEffect(() => {
    const requestPermission = async () => {
      const permStatus = await LocalNotifications.requestPermissions();
      if (permStatus.display !== 'granted') {
        console.warn('Quyền thông báo chưa được cấp!');
      }
    };
    requestPermission();
  }, []);

  const calculateBMI = async () => {
    if (!height || !weight) return;
    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
    setBmi(bmiValue);
    
    let bmiStatus = '';
    if (bmiValue < 18.5) bmiStatus = 'Gầy';
    else if (bmiValue < 24.9) bmiStatus = 'Bình thường';
    else if (bmiValue < 29.9) bmiStatus = 'Thừa cân';
    else bmiStatus = 'Béo phì';
    setStatus(bmiStatus);

    await LocalNotifications.schedule({
      notifications: [{
        title: 'Kết quả BMI',
        body: `Chỉ số BMI của bạn là ${bmiValue.toFixed(1)} - ${bmiStatus}`,
        id: 1
      }]
    });
  };

  const shareResult = async () => {
    await Share.share({
      title: 'Kết quả BMI',
      text: `Chỉ số BMI của tôi là ${bmi?.toFixed(1)} - ${status}`,
      dialogTitle: 'Chia sẻ qua...'
    });
  };

  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl
    });
    setPhoto(image.dataUrl ?? null);
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle style={{ fontSize: '22px', fontWeight: 'bold', textAlign: 'center' }}> TÍNH BMI</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#e0f7ff' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
          <IonCard style={{ width: '350px', textAlign: 'center', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', background: 'white' }}>
            <IonLabel position="stacked">Chiều cao (cm)</IonLabel>
            <IonInput type="number" placeholder="Nhập chiều cao" 
              onIonChange={e => setHeight(e.detail.value ?? '')} />
            <IonLabel position="stacked">Cân nặng (kg)</IonLabel>
            <IonInput type="number" placeholder="Nhập cân nặng" 
              onIonChange={e => setWeight(e.detail.value ?? '')} />
            <IonButton expand="full" color="primary" onClick={calculateBMI} style={{ marginTop: '10px' }} disabled={!height || !weight}>📌 Tính BMI</IonButton>
            <IonButton expand="full" color="success" onClick={shareResult} style={{ marginTop: '10px' }}> Chia sẻ kết quả</IonButton>
            {bmi && (
              <IonCardContent>
                <IonText color="danger"><h2 style={{ color: 'red' }}> Kết quả BMI</h2></IonText>
                <IonText><strong>Chỉ số BMI:</strong> {bmi.toFixed(1)}</IonText>
                <br />
                <IonText><strong>Kết luận:</strong> {status}</IonText>
              </IonCardContent>
            )}
            <IonButton expand="full" color="secondary" onClick={takePhoto} style={{ marginTop: '10px' }}> Chụp ảnh</IonButton>
            {photo && <IonImg src={photo} style={{ marginTop: '10px', borderRadius: '10px', width: '100px', height: '100px' }} />}
          </IonCard>
        </div>
      </IonContent>
    </IonApp>
  );
};

export default App;
