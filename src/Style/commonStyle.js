export const commonStyle = {
    
    cancelBtn: {
      padding: '11px 22.7px',
      fontWeight: '700',
      fontSize: '16px',
      borderRadius: '12px',
      border: '1.5px solid ',
      backgroundColor: "var(--text-white)",
      color: 'var(--blue-1)',
      width: '100%',
      textTransform: 'none',
      '&:hover': {
        backgroundColor: "var(--text-white)",
        color: 'var(--blue-1)',
      },
    },
    confirmBtn: {
      padding: '11px 22.7px',
      fontWeight: '700',
      fontSize: '16px',
      borderRadius: '12px',
      border: '1.5px solid var(--blue-1)',
      backgroundColor: 'var(--blue-1)',
      color: "var(--text-white)",
      width: '100%',
      textTransform: 'none',
      '&:hover': {
        backgroundColor: 'var(--blue-1)',
        color: "var(--text-white)",
      },
    },
    dialogueStyle: {
      '& .MuiDialog-paper': {
        padding: '30px 20px',
        maxWidth: '45% !important',
        width: '100%',
        borderRadius: '12px',
      },
    },
    tabLabelStyle: {
      textTransform: 'none',
      fontWeight: '700',
      fontSize: '14px',
      lineHeight: '40px',
      padding: '0px 12px',
      color: '#6B7280',
      '&.Mui-selected': {
        color: 'var(--blue-1)',
      },
    },
  };
  