import React from 'react';
import Box from '@mui/material/Box';
import { List, ListItem, ListItemText, Typography, useTheme } from '@mui/material';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import Stack from '@mui/material/Stack';

function SearchFilters() {
  const theme = useTheme();

  return (
    <Box display='flex' justifyContent='center' alignItems='center'>
      <Box
        sx={{
          width: '700px',
          height: '550px',
          margin: '100px',
          background: '#38383b',
          borderRadius: '15px',
          color: 'white',
        }}
      >
        <Box
          display='flex'
          sx={{
            justifyContent: 'space-between',
            padding: '1.5rem',
          }}
        >
          <Typography variant='subtitle1' sx={{ textDecoration: 'underline' }}>
            Search Filters
          </Typography>
          <ClearSharpIcon />
        </Box>
        <Stack
          direction='row'
          spacing={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            paddingLeft: '1rem', // Add left padding for the Stack
          }}
        >
          <Box>
            <Typography sx={{ textDecoration: 'underline' }}>UPLOAD DATE</Typography>
            <List>
              <ListItem button>
                <ListItemText fontSize='14px' primary='Last hour' sx={{ fontSize: '14px' }} />
              </ListItem>
              <ListItem button>
                <ListItemText fontSize='14px' primary='Today' sx={{ fontSize: 'x-small' }} />
              </ListItem>
              <ListItem button>
                <ListItemText fontSize='14px' primary='This week' sx={{ fontSize: 'x-small' }} />
              </ListItem>
              <ListItem button>
                <ListItemText fontSize='14px' primary='This month' sx={{ fontSize: 'x-small' }} />
              </ListItem>
              <ListItem button>
                <ListItemText fontSize='14px' primary='This year' sx={{ fontSize: 'x-small' }} />
              </ListItem>
            </List>
          </Box>
          <Box>
            <Typography sx={{ textDecoration: 'underline' }}>TYPE</Typography>
            <List>
              <ListItem button>
                <ListItemText fontSize='14px' primary='Video' sx={{ fontSize: 'x-small' }} />
              </ListItem>
              <ListItem button>
                <ListItemText fontSize='14px' primary='Channel' sx={{ fontSize: 'x-small' }} />
              </ListItem>
              <ListItem button>
                <ListItemText fontSize='14px' primary='Playlist' sx={{ fontSize: 'x-small' }} />
              </ListItem>
              <ListItem button>
                <ListItemText fontSize='14px' primary='Film' sx={{ fontSize: 'x-small' }} />
              </ListItem>
            </List>
          </Box>
          <Box>
            <Typography sx={{ textDecoration: 'underline' }}>DURATION</Typography>
            <List>
              <ListItem button>
                <ListItemText fontSize='14px' primary='Under 4 minutes' sx={{ fontSize: 'x-small' }} />
              </ListItem>
              <ListItem button>
                <ListItemText fontSize='14px' primary='4-20 minutes' sx={{ fontSize: 'x-small' }} />
              </ListItem>
              <ListItem button>
                <ListItemText fontSize='14px' primary='Over 20 minutes' sx={{ fontSize: 'x-small' }} />
              </ListItem>
            </List>
          </Box>
          <Box>
            <Typography sx={{ textDecoration: 'underline' }}>FEATURES</Typography>
            <List>
              <ListItem button>
                <ListItemText fontSize='14px' primary='Live' sx={{ fontSize: 'x-small' }} />
              </ListItem>
              <ListItem button>
                <ListItemText fontSize='14px' primary='4K' sx={{ fontSize: 'x-small' }} />
              </ListItem>
              <ListItem button>
                <ListItemText fontSize='14px' primary='HD' sx={{ fontSize: 'x-small' }} />
              </ListItem>
              <ListItem button>
                <ListItemText fontSize='14px' primary='Subtitles/CC' sx={{ fontSize: 'x-small' }} />
              </ListItem>
              <ListItem button>
                <ListItemText fontSize='14px' primary='Creative Commons' sx={{ fontSize: 'x-small' }} />
              </ListItem>
              <ListItem button>
                <ListItemText fontSize='14px' primary='360°' sx={{ fontSize: 'x-small' }} />
              </ListItem>
              <ListItem button>
                <ListItemText fontSize='14px' primary='VR180' sx={{ fontSize: 'x-small' }} />
              </ListItem>
              <ListItem button>
                <ListItemText fontSize='14px' primary='3D' sx={{ fontSize: 'x-small' }} />
              </ListItem>
              <ListItem button>
                <ListItemText fontSize='14px' primary='HDR' sx={{ fontSize: 'x-small' }} />
              </ListItem>
              <ListItem button>
                <ListItemText fontSize='14px' primary='Location' sx={{ fontSize: 'x-small' }} />
              </ListItem>
              <ListItem button>
                <ListItemText fontSize='14px' primary='Purchased' sx={{ fontSize: 'x-small' }} />
              </ListItem>
            </List>
          </Box>
          <Box>
            <Typography sx={{ textDecoration: 'underline' }}>SORT BY</Typography>
            <List>
              <ListItem button>
                <ListItemText fontSize='14px' primary='Relevance' sx={{ fontSize: 'x-small' }} />
              </ListItem>
              <ListItem button>
                <ListItemText fontSize='14px' primary='Upload date' sx={{ fontSize: 'x-small' }} />
              </ListItem>
              <ListItem button>
                <ListItemText fontSize='14px' primary='View count' sx={{ fontSize: 'x-small' }} />
              </ListItem>
              <ListItem button>
                <ListItemText fontSize='14px' primary='Rating' sx={{ fontSize: 'x-small' }} />
              </ListItem>
            </List>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default SearchFilters;