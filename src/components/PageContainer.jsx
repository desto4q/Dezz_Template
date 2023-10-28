import React from 'react'

function PageContainer({children}) {
  return (
    <div className='page_cont'>
        {children}
    </div>
  )
}

export default PageContainer