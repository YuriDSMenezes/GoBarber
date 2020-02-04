// filas
import Bee from 'bee-queue';
import CancellationMail from '../app/jobs/CancellationsMail';
import redisConfig from '../config/redis';

const jobs = [CancellationMail];

class Queue {
  constructor() {
    this.queues = {}; // varias filas

    this.init();
  }

  init() {
    // Bee = conexão com o redis /
    jobs.forEach(({ key, handle }) => {
      this.queues[key] = {
        bee: new Bee(key, {
          redis: redisConfig,
        }),
        handle,
      };
    });
  }

  // adicionar um novo job em uma nova fila / queue é cada job(EX: cancellateMail)
  add(queue, job) {
    return this.queues[queue].bee.createJob(job).save();
  }

  processQueue() {
    // processa cada job em tempo real
    jobs.forEach(job => {
      const { bee, handle } = this.queues[job.key];

      bee.on('failed', this.hadleFailure).process(handle);
    });
  }

  hadleFailure(job, err) {
    console.log(`Queue ${job.queue.name}: FAILED`, err);
  }
}

export default new Queue();
