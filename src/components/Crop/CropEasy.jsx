import { Cancel } from '@mui/icons-material';
import { uploadFile } from '../../services/index.js';
import CropIcon from '@mui/icons-material/Crop';
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  Slider,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import Cropper from 'react-easy-crop';
import getCroppedImg from './utils/cropImage.js';
import Spinner from '../Spinner/Spinner.jsx';
import Check from '../Check/Check.jsx';


const CropEasy = ({photoURL}) => {
  
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [loading, setLoading] = useState(false)
  const [photo, setPhoto] = useState(null);
  const [openCrop, setOpenCrop] = useState(false)
  const [file, setFile] = useState(null)
  const [img, setImg] = useState(null)
  const [result, setResult] = useState(null)
  const cropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };


  const cropImage = async () => {
    
    setLoading(true)
    try {
      const { file, url } = await getCroppedImg(
        photoURL,
        croppedAreaPixels,
        rotation
      );
      setPhoto(url);
      setFile(file);
      setOpenCrop(false);
      const result = await uploadFile(file)
      const imgUrl = result
      setImg(result)
      setLoading(false)
    } catch (error) {
      
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <>
      {
        img === null ? (
          <div>

          <DialogContent
          dividers
          sx={{
            background: '#333',
            position: 'relative',
            height: 150,
            width: 'auto',
            minWidth: { sm: 200 },
          }}
          >
          <Cropper
            image={photoURL}
            crop={crop}
            zoom={zoom}
            rotation={rotation}
            aspect={1}
            onZoomChange={setZoom}
            onRotationChange={setRotation}
            onCropChange={setCrop}
            onCropComplete={cropComplete}
            />
        </DialogContent>
        <DialogActions sx={{ flexDirection: 'column', mx: 3, my: 2 }}>
          <Box sx={{ width: '100%', mb: 1 }}>
            <Box>
              <Typography>Zoom: {zoomPercent(zoom)}</Typography>
              <Slider
                valueLabelDisplay="auto"
                valueLabelFormat={zoomPercent}
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e, zoom) => setZoom(zoom)}
              />
            </Box>
            <Box>
              <Typography>Rotation: {rotation + '°'}</Typography>
              <Slider
                valueLabelDisplay="auto"
                min={0}
                max={360}
                value={rotation}
                onChange={(e, rotation) => setRotation(rotation)}
                />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              flexWrap: 'wrap',
            }}
          >
            <Button
              variant="outlined"
              startIcon={<Cancel />}
              onClick={() => setOpenCrop(false)}
              >
              Cancel
            </Button>
            <Button
              variant="contained"
              startIcon={<CropIcon />}
              onClick={cropImage}
            >
              Cortar y subir
            </Button>
          </Box>
        </DialogActions>
      </div>
        
        ) : 
          
          loading === true ? (<Spinner/>) : (<Check dataSet={img}></Check>)
       
      }

    </>
  );
};

export default CropEasy;

const zoomPercent = (value) => {
  return `${Math.round(value * 100)}%`;
};
