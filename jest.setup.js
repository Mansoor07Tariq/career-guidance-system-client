import "@testing-library/jest-dom";
import { jest } from "@jest/globals";

// Mock Next.js Router (Fixes "Expected App Router to be Mounted" error)
jest.mock("next/navigation", () => ({
    useRouter: jest.fn(() => ({
        push: jest.fn(),
        replace: jest.fn(),
        prefetch: jest.fn(),
    })),
}));
