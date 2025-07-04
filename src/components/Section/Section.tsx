import React, { ReactNode, ReactElement, forwardRef } from 'react';
import './Section.scss';

interface SectionProps {
  sectionHeader: string;
  headerIcon: ReactElement;
  isReversed?: boolean; // Optional prop to reverse the section layout
  extraClass?: string;
  children?: ReactNode;
}

// Using forwardRef to allow ref forwarding if needed
const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ sectionHeader, headerIcon, extraClass = '', children, isReversed = false }, ref) => (
    <section className={`section-wrapper ${extraClass ? extraClass : ''}`} ref={ref}>
      <div className={`section ${isReversed ? 'section-reverse' : '' }`}>
        <h2 className="section-header">
          { /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          { /* @ts-ignore */ }
          {React.cloneElement(headerIcon, { classes: { root: 'section-header-icon' } })}
          {sectionHeader}
        </h2>
        <div className="section-content">
          {children}
        </div>
      </div>
    </section>
  )
);

Section.displayName = 'Section';

export default Section;