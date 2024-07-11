"use client";
import "./icon.css";

const DeletedIcon = () => {
  return (
    <span className="icon">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <mask
          id="mask0_185_2930"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="20"
          height="20"
        >
          <rect width="20" height="20" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_185_2930)">
          <path
            d="M6.75674 16.5832C6.38698 16.5832 6.07125 16.4523 5.80955 16.1906C5.54785 15.9289 5.41699 15.6132 5.41699 15.2434V5.49984H4.41699V4.41653H8.0003V3.5127H12.0003V4.41653H15.5836V5.49984H14.5836V15.2344C14.5836 15.6197 14.4541 15.9408 14.1951 16.1977C13.936 16.4547 13.619 16.5832 13.2439 16.5832H6.75674ZM13.5003 5.49984H6.5003V15.2434C6.5003 15.3182 6.52435 15.3796 6.57243 15.4277C6.62051 15.4758 6.68195 15.4998 6.75674 15.4998H13.2439C13.308 15.4998 13.3667 15.4731 13.4202 15.4197C13.4736 15.3663 13.5003 15.3075 13.5003 15.2434V5.49984ZM8.33687 13.9998H9.42018V6.99984H8.33687V13.9998ZM10.5804 13.9998H11.6637V6.99984H10.5804V13.9998Z"
            fill="var(--time-utils-delete-icon)"
          />
        </g>
      </svg>
    </span>
  );
};

export default DeletedIcon;