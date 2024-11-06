import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
describe('ConfirmationDialogComponent', () => {
  const labels = {
    closeButton: 'Cancel',
    acceptButton: 'Accept',
  };

  const defaultProps = {
    isOpen: true,
    onAccept: jest.fn(),
    onClose: jest.fn(),
    title: 'Confirm Action',
    labels: labels,
    children: 'Are you sure you want to continue?',
  };

  it('displays the dialog when isOpen is true', () => {
    const { isOpen, onAccept, onClose, title, labels, children } = defaultProps;
    render(
      <ConfirmationDialogComponent
        isOpen={isOpen}
        onAccept={onAccept}
        onClose={onClose}
        title={title}
        labels={labels}
        children={children}
      />
    );

    // Verify that the title and content are rendered
    expect(screen.getByText('Confirm Action')).toBeInTheDocument();
    expect(
      screen.getByText('Are you sure you want to continue?')
    ).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Accept')).toBeInTheDocument();
  });

  it('does not display the dialog when isOpen is false', () => {
    render(<ConfirmationDialogComponent {...defaultProps} isOpen={false} />);

    // The dialog should not be present
    expect(screen.queryByText('Confirm Action')).toBeNull();
    expect(screen.queryByText('Are you sure you want to continue?')).toBeNull();
    expect(screen.queryByText('Cancel')).toBeNull();
    expect(screen.queryByText('Accept')).toBeNull();
  });

  it('calls onClose when the Cancel button is clicked', () => {
    render(<ConfirmationDialogComponent {...defaultProps} />);

    const closeButton = screen.getByText('Cancel');
    fireEvent.click(closeButton);

    // Verify that the onClose function was called
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it('calls onAccept and onClose when the Accept button is clicked', () => {
    render(<ConfirmationDialogComponent {...defaultProps} />);

    const acceptButton = screen.getByText('Accept');
    fireEvent.click(acceptButton);

    // Verify that both functions were called
    expect(defaultProps.onAccept).toHaveBeenCalled();
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it('displays the correct text on the buttons', () => {
    render(<ConfirmationDialogComponent {...defaultProps} />);

    const closeButton = screen.getByText('Cancel');
    const acceptButton = screen.getByText('Accept');

    // Verify the text content of the buttons
    expect(closeButton).toHaveTextContent('Cancel');
    expect(acceptButton).toHaveTextContent('Accept');
  });
});
