-- DropForeignKey
ALTER TABLE "Carlisting" DROP CONSTRAINT "Carlisting_orderId_fkey";

-- AlterTable
ALTER TABLE "Carlisting" ALTER COLUMN "orderId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Carlisting" ADD CONSTRAINT "Carlisting_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;
