/**
 * Generates subtle ambient ocean wave sounds and soft ship bell chimes using Web Audio API.
 * Entirely self-contained, no external mp3 files required.
 */
class OceanAtmosphere {
  private audioCtx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private noiseNode: AudioBufferSourceNode | null = null;
  private filterNode: BiquadFilterNode | null = null;
  private lfoNode: OscillatorNode | null = null;

  public init() {
    if (this.audioCtx) return;
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    this.audioCtx = new AudioContextClass();
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public play() {
    try {
      this.init();
      if (!this.audioCtx) return;

      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      // Master gain
      this.masterGain = this.audioCtx.createGain();
      this.masterGain.gain.setValueAtTime(0.08, this.audioCtx.currentTime); // gentle background volume
      this.masterGain.connect(this.audioCtx.destination);

      // Create pink noise buffer for realistic ocean surf
      const bufferSize = this.audioCtx.sampleRate * 4;
      const noiseBuffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
        b6 = white * 0.115926;
      }

      this.noiseNode = this.audioCtx.createBufferSource();
      this.noiseNode.buffer = noiseBuffer;
      this.noiseNode.loop = true;

      // Low pass filter modulated by LFO to simulate wave swell
      this.filterNode = this.audioCtx.createBiquadFilter();
      this.filterNode.type = 'lowpass';
      this.filterNode.frequency.setValueAtTime(380, this.audioCtx.currentTime);

      // LFO for wave cycle (every ~5.5 seconds a swell)
      this.lfoNode = this.audioCtx.createOscillator();
      this.lfoNode.frequency.setValueAtTime(0.18, this.audioCtx.currentTime);

      const lfoGain = this.audioCtx.createGain();
      lfoGain.gain.setValueAtTime(260, this.audioCtx.currentTime);

      this.lfoNode.connect(lfoGain);
      lfoGain.connect(this.filterNode.frequency);

      this.noiseNode.connect(this.filterNode);
      this.filterNode.connect(this.masterGain);

      this.noiseNode.start();
      this.lfoNode.start();
      this.isPlaying = true;
    } catch {
      this.isPlaying = false;
    }
  }

  public stop() {
    try {
      if (this.masterGain && this.audioCtx) {
        this.masterGain.gain.setTargetAtTime(0.001, this.audioCtx.currentTime, 0.5);
      }
      setTimeout(() => {
        if (this.noiseNode) {
          try { this.noiseNode.stop(); } catch { /* noop */ }
          this.noiseNode.disconnect();
          this.noiseNode = null;
        }
        if (this.lfoNode) {
          try { this.lfoNode.stop(); } catch { /* noop */ }
          this.lfoNode.disconnect();
          this.lfoNode = null;
        }
        this.isPlaying = false;
      }, 500);
    } catch {
      this.isPlaying = false;
    }
  }

  public playChime() {
    try {
      this.init();
      if (!this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(784, this.audioCtx.currentTime); // G5 note ship bell
      osc.frequency.exponentialRampToValueAtTime(1046.5, this.audioCtx.currentTime + 0.15); // C6

      gain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 1.3);
    } catch {
      // Audio fallback silent
    }
  }
}

export const oceanAudio = new OceanAtmosphere();
