import { SoftwareEnum } from "src/common/enums/software.enum";
import { BaseEntity, Column, CreateDateColumn, Entity, ObjectIdColumn, UpdateDateColumn } from "typeorm";

@Entity('app_logger')
export class LoggerEntity extends BaseEntity {
    @ObjectIdColumn()
    public _id: string;

    @Column('enum', { enum: SoftwareEnum })
    public SoftwareName: string;

    @Column('text')
    public message: string;

    @Column('varchar')
    public level: string;

    @Column('timestamp')
    public timestamp: Date;

    @Column('varchar')
    public context: string;

    @Column('varchar')
    public url: string;

    @Column('array')
    public params: string;

    @Column()
    public host: string;

    @CreateDateColumn({
        type: "timestamp",
        name: "created_at",
        nullable: false,
        default: () => "CURRENT_TIMESTAMP"
    })
    public createdAt!: Date;

    @UpdateDateColumn({
        type: "datetime",
        name: "updated_at",
        nullable: true,
        default: null
    })
    public updatedAt?: Date;
}
