import React from 'react';
import Button from '@/components/shared/Button';

type StaticPDFDownloadProps = {
  url: string;
  fileName: string;
  label: string;
  className?: string;
};

const StaticPDFDownload = ({ url, fileName, label, className }: StaticPDFDownloadProps) => {
  return (
      <a href={url} download={fileName}>
          <Button
              variant={"outline"}
              size={"lg"}
              className={className}
          >
              {label}
          </Button>
      </a>
  );
};

export default StaticPDFDownload;