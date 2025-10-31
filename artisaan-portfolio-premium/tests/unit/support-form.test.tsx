import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SupportForm } from '@/components/forms/support-form';

describe('SupportForm', () => {
  beforeEach(() => {
    globalThis.fetch = jest.fn().mockResolvedValue({ ok: true, json: async () => ({ success: true }) }) as any;
  });

  it('submits the form and shows success state', async () => {
    render(<SupportForm />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Ava' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'ava@example.com' } });
    fireEvent.change(screen.getByLabelText(/company/i), { target: { value: 'Artisaan' } });
    fireEvent.change(screen.getByLabelText(/how can we help/i), { target: { value: 'Need help with integration details.' } });

    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => expect(screen.getByText(/thanks for reaching out/i)).toBeInTheDocument());
  });
});
