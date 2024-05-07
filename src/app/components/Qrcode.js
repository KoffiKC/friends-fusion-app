import Link from 'next/link'
import Image from 'next/image';
import { Button } from '@mui/material';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import ShareIcon from '@mui/icons-material/Share';

export default function QRcode({src}) {
  return (
  <div>
    <Link href="/user/generated">
      <Image src={src}
      width={500}
      height={500}
      alt="Picture of the author"
      />
    </Link>
    <Button size="large" endIcon={<DownloadForOfflineIcon />}> Download</Button>
    <Button size="large" endIcon={<ShareIcon />}> Share</Button>
  </div>
  )
}