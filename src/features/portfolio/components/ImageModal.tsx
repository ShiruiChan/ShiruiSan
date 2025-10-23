import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageModalProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
  title: string;
}

export function ImageModal({
  images,
  currentIndex,
  onClose,
  onNavigate,
  title,
}: ImageModalProps) {
  const hasMultiple = images.length > 1;

  const handlePrevious = () => {
    onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          {hasMultiple && (
            <p className="text-sm text-muted-foreground">
              {currentIndex + 1} / {images.length}
            </p>
          )}
        </DialogHeader>

        <div className="relative bg-muted/30">
          <img
            src={images[currentIndex]}
            alt={`${title} - image ${currentIndex + 1}`}
            className="w-full h-auto max-h-[70vh] object-contain"
          />

          {hasMultiple && (
            <>
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full"
                onClick={handleNext}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>

        {hasMultiple && (
          <div className="flex gap-2 p-4 overflow-x-auto">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate(idx)}
                className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                  idx === currentIndex
                    ? "border-primary"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
