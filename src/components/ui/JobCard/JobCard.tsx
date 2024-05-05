import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import './JobCard.css';
import { getEstimatedSalary } from '../../../utils/text';
import { useState } from 'react';
import JobModal from '../Modal/Modal';

const JobCard = ({
  title,
  description,
  companyName,
  location,
  experience,
  minSalary,
  maxSalary,
  logo,
  salaryCurrencyCode,
}: {
  title: string;
  description: string;
  companyName: string;
  location: string | null;
  experience: number | null;
  minSalary: number | null;
  maxSalary: number | null;
  logo: string;
  salaryCurrencyCode: string | null;
}) => {
  const [open, setOpen] = useState(false);
  const salary = getEstimatedSalary({
    minSalary,
    maxSalary,
    salaryCurrencyCode,
  });

  const maxLength = 150;
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <JobModal open={open} handleClose={handleClose} content={description} />
      <Card
        variant='elevation'
        elevation={4}
        sx={{
          borderRadius: '20px',
        }}
      >
        <CardContent>
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <img src={logo} alt='logo' height={32} width={32} />
            <Box>
              <Typography className='company-name' component='h1'>
                {companyName}
              </Typography>
              <Typography className='role-name' component='h2'>
                {title}
              </Typography>
              <Typography className='location'>{location}</Typography>
            </Box>
          </Box>
          {salary && (
            <Typography sx={{ mt: 1 }} color='text.secondary'>
              Estimated Salary: {salary}
            </Typography>
          )}
          <Typography sx={{ mt: 1.5 }}>About Company:</Typography>

          <Typography fontWeight={500}>About Us</Typography>
          {/* <Typography gutterBottom className='description'>
          {description}
        </Typography> */}
          <Typography gutterBottom className='description'>
            {description.length <= maxLength
              ? description
              : `${description.substring(0, maxLength)}...`}
          </Typography>
          <Box
            className='show-more'
            sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Button size='small' onClick={() => setOpen(true)}>
              Show More
            </Button>
          </Box>

          {experience && (
            <>
              <Typography color='text.secondary' sx={{ fontSize: '13px' }}>
                Minimum Experience
              </Typography>
              <Typography color='text.secondary'>
                {experience} years{' '}
              </Typography>
            </>
          )}
        </CardContent>
        <CardActions sx={{ width: '100%', marginTop: 'auto' }}>
          <Button
            sx={{ width: '100%' }}
            size='large'
            variant='contained'
            disableElevation
          >
            ⚡ Easy Apply
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default JobCard;
