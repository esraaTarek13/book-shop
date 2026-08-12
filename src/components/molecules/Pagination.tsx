import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import IconButton from "../atoms/IconButton";
import Button from "../atoms/Button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  disabled,
}: PaginationProps) {
  return (
    <section className="flex justify-center gap-1.5 md:gap-3">
      <IconButton
        icon={<IoIosArrowBack size={15} />}
        aria-label="Previous"
        variant="outline"
        disabled={disabled || currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="disabled:cursor-not-allowed"
      />

      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1;
        return (
          <Button
            key={page}
            variant={currentPage === page ? "primary" : "outline"}
            disabled={disabled}
            onClick={() => onPageChange(page)}
            size="sm"
            className="w-fit!"
          >
            {page}
          </Button>
        );
      })}

      <IconButton
        icon={<IoIosArrowForward size={15} />}
        aria-label="Next"
        variant="outline"
        disabled={disabled || currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="disabled:cursor-not-allowed"
      />
    </section>
  );
}
