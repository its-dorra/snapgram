import { fileUploadIcon } from "@/assets";
import { Button } from "@/components/ui/button";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface PhotoDropzoneProps {
  error: string | null;
  onChange: (file: File) => void;
  previewImage: string | undefined;
}

export default function PhotoDropzone({
  previewImage,
  error,
  onChange,
}: PhotoDropzoneProps) {
  const [preview, setPreview] = useState<string | undefined>(previewImage);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
      setPreview(URL.createObjectURL(acceptedFiles[0]));
      onChange(acceptedFiles[0]);
    },
    [preview, onChange],
  );

  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".svg"],
    },
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024, // 5MB
    multiple: false,
  });

  const errorMessage = fileRejections[0]?.errors[0]?.message;

  return (
    <div className="flex flex-col gap-2">
      <div className="bg-dark-4 h-[550px] overflow-clip p-6">
        {preview && (
          <img
            className="size-full rounded-xl object-cover"
            src={preview}
            alt="preview photo"
            onLoad={() => {
              if (preview) {
                URL.revokeObjectURL(preview);
              }
            }}
          />
        )}
        <div {...getRootProps({ className: "h-full" })}>
          <input {...getInputProps()} />
          <div className="flex h-full flex-col items-center justify-center gap-8 p-4">
            <img src={fileUploadIcon} alt="file upload icon" />
            <div className="inline-flex flex-col items-center gap-1">
              <p>Drag photo here</p>
              <p className="small-regular text-gray-500">SVG, PNG, JPG</p>
            </div>
            <Button
              type="button"
              className="bg-dark-3 w-fit cursor-pointer"
              variant="ghost"
            >
              Select from computer
            </Button>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-1">
        {error && <p className="text-sm text-red-500">{error}</p>}
        {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
      </div>
    </div>
  );
}
